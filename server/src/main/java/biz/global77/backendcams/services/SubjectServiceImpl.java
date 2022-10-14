package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Subject;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/* CRUD functions for subject */
@Service
public class SubjectServiceImpl implements SubjectService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a subject */
    @Override
    public Subject insertSubject(Subject subject) {
        dsl.insertInto(Tables.SUBJECT,
                Tables.SUBJECT.SUBJECT_CODE,
                Tables.SUBJECT.SUBJECT_TITLE,
                Tables.SUBJECT.UNITS,
                Tables.SUBJECT.PRE_REQUISITES,
                Tables.SUBJECT.ACTIVE_INACTIVE,
                Tables.SUBJECT.PROGRAM_ID)
        .values(
                subject.getSubjectCode(),
                subject.getSubjectTitle(),
                subject.getUnits(),
                subject.getPreRequisites(),
                subject.getActiveInactive(),
                subject.getProgramId())
        .execute();
        return subject;
    }

    /* get all subjects */
    @Override
    public List<Subject> getSubjects() {
        return dsl.selectFrom(Tables.SUBJECT).fetchInto(Subject.class);
    }

    /* get subject by ID */
    @Override
    public Subject getSubjectById(Integer subjectId) {
        return dsl.selectFrom(Tables.SUBJECT)
                .where(Tables.SUBJECT.SUBJECT_ID.eq(subjectId))
                .fetchOneInto(Subject.class);
    }

    /* update subject detail(s) */
    @Override
    public Subject updateSubject(Integer subjectId, Subject subject) {
        dsl.update(Tables.SUBJECT)
                .set(Tables.SUBJECT.SUBJECT_CODE, subject.getSubjectCode())
                .set(Tables.SUBJECT.SUBJECT_TITLE, subject.getSubjectTitle())
                .set(Tables.SUBJECT.UNITS, subject.getUnits())
                .set(Tables.SUBJECT.PRE_REQUISITES, subject.getPreRequisites())
                .set(Tables.SUBJECT.ACTIVE_INACTIVE, subject.getActiveInactive())
                .where(Tables.SUBJECT.SUBJECT_ID.eq(subjectId))
                .execute();
        return subject;
    }

    /* delete subject by ID */
    @Override
    public void deleteSubjectById(Integer subjectId) {
        dsl.deleteFrom(Tables.SUBJECT)
                .where(Tables.SUBJECT.SUBJECT_ID.eq(subjectId))
                .execute();
    }

}
