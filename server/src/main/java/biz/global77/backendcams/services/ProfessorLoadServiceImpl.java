package biz.global77.backendcams.services;

import biz.global77.backendcams.interfaces.ProfessorLoadInterface;
import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.ProfessorLoad;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/* CRUD functions for professor load */
@Service
public class ProfessorLoadService implements ProfessorLoadInterface {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a professor load */
    @Override
    public ProfessorLoad insertProfessorLoad(ProfessorLoad professorLoad) {
        dsl.insertInto(Tables.PROFESSOR_LOAD,
                Tables.PROFESSOR_LOAD.SECTION,
                Tables.PROFESSOR_LOAD.YEARLEVEL,
                Tables.PROFESSOR_LOAD.COURSE_TITLE,
                Tables.PROFESSOR_LOAD.PROFESSOR_ID)
                .values(
                        professorLoad.getSection(),
                        professorLoad.getYearlevel(),
                        professorLoad.getCourseTitle(),
                        professorLoad.getProfessorId())
                .execute();
        return professorLoad;
    }

    /* get all professor load */
    @Override
    public List<ProfessorLoad> getProfessorLoads() {
        return dsl.selectFrom(Tables.PROFESSOR_LOAD).fetchInto(ProfessorLoad.class);
    }

    /* get professor load by ID */
    @Override
    public ProfessorLoad getProfessorLoadById(Integer loadId) {
        return dsl.selectFrom(Tables.PROFESSOR_LOAD)
                .where(Tables.PROFESSOR_LOAD.PROFESSOR_ID.eq(loadId))
                .fetchOneInto(ProfessorLoad.class);
    }

    /* update professor load details */
    @Override
    public ProfessorLoad updateProfessorLoad(Integer loadId, ProfessorLoad professorLoad) {
        dsl.update(Tables.PROFESSOR_LOAD)
                .set(Tables.PROFESSOR_LOAD.SECTION, professorLoad.getSection())
                .set(Tables.PROFESSOR_LOAD.YEARLEVEL, professorLoad.getYearlevel())
                .set(Tables.PROFESSOR_LOAD.COURSE_TITLE, professorLoad.getCourseTitle())
                .set(Tables.PROFESSOR_LOAD.PROFESSOR_ID, professorLoad.getProfessorId())
                .where(Tables.PROFESSOR_LOAD.LOAD_ID.eq(loadId))
                .execute();
        return professorLoad;
    }

    /* delete professor load by ID */
    @Override
    public void deleteProfessorLoadById(Integer loadId) {
        dsl.deleteFrom(Tables.PROFESSOR_LOAD)
                .where(Tables.PROFESSOR_LOAD.PROFESSOR_ID.eq(loadId))
                .execute();
    }

}
