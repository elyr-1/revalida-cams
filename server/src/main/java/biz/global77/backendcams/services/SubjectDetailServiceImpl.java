package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.SubjectDetailHistory;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/* CRUD functions for subject detail history */
@Service
public class SubjectDetailServiceImpl implements SubjectDetailService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add subject detail */
    @Override
    public SubjectDetailHistory insertSubjectDetail(SubjectDetailHistory subjectDetail) {
        dsl.insertInto(Tables.SUBJECT_DETAIL_HISTORY,
                Tables.SUBJECT_DETAIL_HISTORY.ACADEMIC_YEAR,
                Tables.SUBJECT_DETAIL_HISTORY.SEM,
                Tables.SUBJECT_DETAIL_HISTORY.SCHEDULE,
                Tables.SUBJECT_DETAIL_HISTORY.SECTION,
                Tables.SUBJECT_DETAIL_HISTORY.YEARLEVEL,
                Tables.SUBJECT_DETAIL_HISTORY.STATUS,
                Tables.SUBJECT_DETAIL_HISTORY.PROFESSOR_NO,
                Tables.SUBJECT_DETAIL_HISTORY.SUBJECT_CODE)
        .values(
                subjectDetail.getAcademicYear(),
                subjectDetail.getSem(),
                subjectDetail.getSchedule(),
                subjectDetail.getSection(),
                subjectDetail.getYearlevel(),
                subjectDetail.getStatus(),
                subjectDetail.getProfessorNo(),
                subjectDetail.getSubjectCode())
        .execute();
        return subjectDetail;
    }

    /* get all subject details history */
    @Override
    public List<SubjectDetailHistory> getSubjectDetails() {
        return dsl.selectFrom(Tables.SUBJECT_DETAIL_HISTORY)
                .orderBy(Tables.SUBJECT_DETAIL_HISTORY.SUBJECT_CODE)
                .fetchInto(SubjectDetailHistory.class);
    }

    /* get subject detail by ID */
    @Override
    public SubjectDetailHistory getSubjectDetailById(Integer sessionId) {
        return dsl.selectFrom(Tables.SUBJECT_DETAIL_HISTORY)
                .where(Tables.SUBJECT_DETAIL_HISTORY.SESSION_ID.eq(sessionId))
                .fetchOneInto(SubjectDetailHistory.class);
    }

    /* update subject detail */
    @Override
    public SubjectDetailHistory updateSubjectDetail(Integer sessionId, SubjectDetailHistory subjectDetail) {
        dsl.update(Tables.SUBJECT_DETAIL_HISTORY)
                .set(Tables.SUBJECT_DETAIL_HISTORY.ACADEMIC_YEAR, subjectDetail.getAcademicYear())
                .set(Tables.SUBJECT_DETAIL_HISTORY.SEM, subjectDetail.getSem())
                .set(Tables.SUBJECT_DETAIL_HISTORY.SCHEDULE, subjectDetail.getSchedule())
                .set(Tables.SUBJECT_DETAIL_HISTORY.SECTION, subjectDetail.getSection())
                .set(Tables.SUBJECT_DETAIL_HISTORY.YEARLEVEL, subjectDetail.getYearlevel())
                .set(Tables.SUBJECT_DETAIL_HISTORY.STATUS, subjectDetail.getStatus())
                .set(Tables.SUBJECT_DETAIL_HISTORY.PROFESSOR_NO, subjectDetail.getProfessorNo())
                .set(Tables.SUBJECT_DETAIL_HISTORY.SUBJECT_CODE, subjectDetail.getSubjectCode())
                .where(Tables.SUBJECT_DETAIL_HISTORY.SESSION_ID.eq(sessionId))
                .execute();
        return subjectDetail;
    }

    /* delete subject detail */
    @Override
    public void deleteSubjectDetailById(Integer sessionId) {
        dsl.deleteFrom(Tables.SUBJECT_DETAIL_HISTORY)
                .where(Tables.SUBJECT_DETAIL_HISTORY.SESSION_ID.eq(sessionId))
                .execute();
    }

}
