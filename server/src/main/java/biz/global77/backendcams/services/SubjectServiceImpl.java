package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Subject;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

/* CRUD functions for subject */
@Service
public class SubjectServiceImpl implements SubjectService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a subject */
    @Override
    public Subject insertSubject(Subject subject) {
        dsl.insertInto(SUBJECT,
                SUBJECT.SUBJECT_CODE,
                SUBJECT.SUBJECT_TITLE,
                SUBJECT.UNITS,
                SUBJECT.PRE_REQUISITES,
                SUBJECT.PROGRAM_CODE)
        .values(
                subject.getSubjectCode(),
                subject.getSubjectTitle(),
                subject.getUnits(),
                subject.getPreRequisites(),
                subject.getProgramCode())
        .execute();
        return subject;
    }

    /* get all subjects */
    @Override
    public List<Subject> getSubjects() {
        return dsl.selectFrom(SUBJECT)
                .orderBy(SUBJECT.PROGRAM_CODE)
                .fetchInto(Subject.class);
    }

    /* get subject by ID */
    @Override
    public Subject getSubjectById(Integer subjectId) {
        return dsl.selectFrom(SUBJECT)
                .where(SUBJECT.SUBJECT_ID.eq(subjectId))
                .fetchOneInto(Subject.class);
    }

    /* update subject detail(s) */
    @Override
    public Subject updateSubject(Integer subjectId, Subject subject) {
        dsl.update(SUBJECT)
                .set(SUBJECT.SUBJECT_CODE, subject.getSubjectCode())
                .set(SUBJECT.SUBJECT_TITLE, subject.getSubjectTitle())
                .set(SUBJECT.UNITS, subject.getUnits())
                .set(SUBJECT.PRE_REQUISITES, subject.getPreRequisites())
                .set(SUBJECT.PROGRAM_CODE, subject.getProgramCode())
                .where(SUBJECT.SUBJECT_ID.eq(subjectId))
                .execute();
        return subject;
    }

    /* delete subject by ID */
    @Override
    public void deleteSubjectById(Integer subjectId) {
        dsl.deleteFrom(SUBJECT)
                .where(SUBJECT.SUBJECT_ID.eq(subjectId))
                .execute();
    }

}
