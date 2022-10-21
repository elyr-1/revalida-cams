package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Professor;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

/* CRUD functions for professor */
@Service
public class ProfessorServiceImpl implements ProfessorService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a professor */
    @Override
    public Professor insertProfessor(Professor professor) {
        dsl.insertInto(PROFESSOR,
                PROFESSOR.PROFESSOR_NO,
                PROFESSOR.PROFESSOR_NAME,
                PROFESSOR.GENDER,
                PROFESSOR.BIRTHDATE,
                PROFESSOR.ADDRESS,
                PROFESSOR.IS_ACTIVE,
                PROFESSOR.ID)
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
        return dsl.selectFrom(PROFESSOR)
                .orderBy(PROFESSOR.PROFESSOR_NO)
                .fetchInto(Professor.class);
    }

    /* get professor by ID */
    @Override
    public Professor getProfessorById(Integer professorId) {
        return dsl.selectFrom(PROFESSOR)
                .where(PROFESSOR.PROFESSOR_ID.eq(professorId))
                .fetchOneInto(Professor.class);
    }

    /* update professor detail(s) */
    @Override
    public Professor updateProfessor(Integer professorId, Professor professor) {
        dsl.update(PROFESSOR)
                .set(PROFESSOR.PROFESSOR_NO, professor.getProfessorNo())
                .set(PROFESSOR.PROFESSOR_NAME, professor.getProfessorName())
                .set(PROFESSOR.GENDER, professor.getGender())
                .set(PROFESSOR.BIRTHDATE, professor.getBirthdate())
                .set(PROFESSOR.ADDRESS, professor.getAddress())
                .set(PROFESSOR.IS_ACTIVE, professor.getIsActive())
                .set(PROFESSOR.ID, professor.getId())
                .where(PROFESSOR.PROFESSOR_ID.eq(professorId))
                .execute();
        return professor;
    }

    /* delete professor by ID */
    @Override
    public void deleteProfessorById(Integer professorId) {
        dsl.deleteFrom(PROFESSOR)
                .where(PROFESSOR.PROFESSOR_ID.eq(professorId))
                .execute();
    }

}
