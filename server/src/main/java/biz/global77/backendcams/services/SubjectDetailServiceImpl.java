package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.SubjectDetailHistory;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

/* CRUD functions for subject detail history */
@Service
public class SubjectDetailServiceImpl implements SubjectDetailService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add subject detail */
    @Override
    public SubjectDetailHistory insertSubjectDetail(SubjectDetailHistory subjectDetail) {
        dsl.insertInto(SUBJECT_DETAIL_HISTORY,
                SUBJECT_DETAIL_HISTORY.ACADEMIC_YEAR,
                SUBJECT_DETAIL_HISTORY.SEM,
                SUBJECT_DETAIL_HISTORY.SCHEDULE_FROM,
                SUBJECT_DETAIL_HISTORY.SCHEDULE_TO,
                SUBJECT_DETAIL_HISTORY.DAY,
                SUBJECT_DETAIL_HISTORY.SECTION,
                SUBJECT_DETAIL_HISTORY.YEARLEVEL,
                SUBJECT_DETAIL_HISTORY.STATUS,
                SUBJECT_DETAIL_HISTORY.PROFESSOR_NO,
                SUBJECT_DETAIL_HISTORY.SUBJECT_CODE)
        .values(
                subjectDetail.getAcademicYear(),
                subjectDetail.getSem(),
                subjectDetail.getScheduleFrom(),
                subjectDetail.getScheduleTo(),
                subjectDetail.getDay(),
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
        return dsl.selectFrom(SUBJECT_DETAIL_HISTORY)
                .orderBy(SUBJECT_DETAIL_HISTORY.SUBJECT_CODE)
                .fetchInto(SubjectDetailHistory.class);
    }

    /* get subject detail by ID */
    @Override
    public SubjectDetailHistory getSubjectDetailById(Integer sessionId) {
        return dsl.selectFrom(SUBJECT_DETAIL_HISTORY)
                .where(SUBJECT_DETAIL_HISTORY.SESSION_ID.eq(sessionId))
                .fetchOneInto(SubjectDetailHistory.class);
    }

    /* update subject detail */
    @Override
    public SubjectDetailHistory updateSubjectDetail(Integer sessionId, SubjectDetailHistory subjectDetail) {
        dsl.update(SUBJECT_DETAIL_HISTORY)
                .set(SUBJECT_DETAIL_HISTORY.ACADEMIC_YEAR, subjectDetail.getAcademicYear())
                .set(SUBJECT_DETAIL_HISTORY.SEM, subjectDetail.getSem())
                .set(SUBJECT_DETAIL_HISTORY.SCHEDULE_FROM, subjectDetail.getScheduleFrom())
                .set(SUBJECT_DETAIL_HISTORY.SCHEDULE_TO, subjectDetail.getScheduleTo())
                .set(SUBJECT_DETAIL_HISTORY.DAY, subjectDetail.getDay())
                .set(SUBJECT_DETAIL_HISTORY.SECTION, subjectDetail.getSection())
                .set(SUBJECT_DETAIL_HISTORY.YEARLEVEL, subjectDetail.getYearlevel())
                .set(SUBJECT_DETAIL_HISTORY.STATUS, subjectDetail.getStatus())
                .set(SUBJECT_DETAIL_HISTORY.PROFESSOR_NO, subjectDetail.getProfessorNo())
                .set(SUBJECT_DETAIL_HISTORY.SUBJECT_CODE, subjectDetail.getSubjectCode())
                .where(SUBJECT_DETAIL_HISTORY.SESSION_ID.eq(sessionId))
                .execute();
        return subjectDetail;
    }

    /* delete subject detail */
    @Override
    public void deleteSubjectDetailById(Integer sessionId) {
        dsl.deleteFrom(SUBJECT_DETAIL_HISTORY)
                .where(SUBJECT_DETAIL_HISTORY.SESSION_ID.eq(sessionId))
                .execute();
    }

}
