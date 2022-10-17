package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Professor;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/* CRUD functions for professor */
@Service
public class ProfessorServiceImpl implements ProfessorService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a professor */
    @Override
    public Professor insertProfessor(Professor professor) {
        dsl.insertInto(Tables.PROFESSOR,
                Tables.PROFESSOR.PROFESSOR_NO,
                Tables.PROFESSOR.PROFESSOR_NAME,
                Tables.PROFESSOR.GENDER,
                Tables.PROFESSOR.BIRTHDATE,
                Tables.PROFESSOR.ADDRESS,
                Tables.PROFESSOR.IS_ACTIVE,
                Tables.PROFESSOR.ID)
        .values(
                professor.getProfessorNo(),
                professor.getProfessorName(),
                professor.getGender(),
                professor.getBirthdate(),
                professor.getAddress(),
                professor.getIsActive(),
                professor.getId())
        .execute();
        return professor;
    }

    /* get all professors */
    @Override
    public List<Professor> getProfessors() {
        return dsl.selectFrom(Tables.PROFESSOR)
                .orderBy(Tables.PROFESSOR.PROFESSOR_NO)
                .fetchInto(Professor.class);
    }

    /* get professor by ID */
    @Override
    public Professor getProfessorById(Integer professorId) {
        return dsl.selectFrom(Tables.PROFESSOR)
                .where(Tables.PROFESSOR.PROFESSOR_ID.eq(professorId))
                .fetchOneInto(Professor.class);
    }

    /* update professor detail(s) */
    @Override
    public Professor updateProfessor(Integer professorId, Professor professor) {
        dsl.update(Tables.PROFESSOR)
                .set(Tables.PROFESSOR.PROFESSOR_NO, professor.getProfessorNo())
                .set(Tables.PROFESSOR.PROFESSOR_NAME, professor.getProfessorName())
                .set(Tables.PROFESSOR.GENDER, professor.getGender())
                .set(Tables.PROFESSOR.BIRTHDATE, professor.getBirthdate())
                .set(Tables.PROFESSOR.ADDRESS, professor.getAddress())
                .set(Tables.PROFESSOR.IS_ACTIVE, professor.getIsActive())
                .set(Tables.PROFESSOR.ID, professor.getId())
                .where(Tables.PROFESSOR.PROFESSOR_ID.eq(professorId))
                .execute();
        return professor;
    }

    /* delete professor by ID */
    @Override
    public void deleteProfessorById(Integer professorId) {
        dsl.deleteFrom(Tables.PROFESSOR)
                .where(Tables.PROFESSOR.PROFESSOR_ID.eq(professorId))
                .execute();
    }

}
