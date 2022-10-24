package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.ProfessorLoad;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

/* CRUD functions for professor load */
@Service
public class ProfessorLoadServiceImpl implements ProfessorLoadService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a professor load */
    @Override
    public ProfessorLoad insertProfessorLoad(ProfessorLoad professorLoad) {
        dsl.insertInto(PROFESSOR_LOAD,
                PROFESSOR_LOAD.SECTION,
                PROFESSOR_LOAD.YEARLEVEL,
                PROFESSOR_LOAD.COURSE_TITLE,
                PROFESSOR_LOAD.PROFESSOR_NO)
                .values(
                        professorLoad.getSection(),
                        professorLoad.getYearlevel(),
                        professorLoad.getCourseTitle(),
                        professorLoad.getProfessorNo())
                .execute();
        return professorLoad;
    }

    /* get all professor load */
    @Override
    public List<ProfessorLoad> getProfessorLoads() {
        return dsl.selectFrom(PROFESSOR_LOAD).fetchInto(ProfessorLoad.class);
    }

    /* get professor load by ID */
    @Override
    public ProfessorLoad getProfessorLoadById(Integer loadId) {
        return dsl.selectFrom(PROFESSOR_LOAD)
                .where(PROFESSOR_LOAD.LOAD_ID.eq(loadId))
                .fetchOneInto(ProfessorLoad.class);
    }

    /* update professor load details */
    @Override
    public ProfessorLoad updateProfessorLoad(Integer loadId, ProfessorLoad professorLoad) {
        dsl.update(PROFESSOR_LOAD)
                .set(PROFESSOR_LOAD.SECTION, professorLoad.getSection())
                .set(PROFESSOR_LOAD.YEARLEVEL, professorLoad.getYearlevel())
                .set(PROFESSOR_LOAD.COURSE_TITLE, professorLoad.getCourseTitle())
                .set(PROFESSOR_LOAD.PROFESSOR_NO, professorLoad.getProfessorNo())
                .where(PROFESSOR_LOAD.LOAD_ID.eq(loadId))
                .execute();
        return professorLoad;
    }

    /* delete professor load by ID */
    @Override
    public void deleteProfessorLoadById(Integer loadId) {
        dsl.deleteFrom(PROFESSOR_LOAD)
                .where(PROFESSOR_LOAD.LOAD_ID.eq(loadId))
                .execute();
    }

}
