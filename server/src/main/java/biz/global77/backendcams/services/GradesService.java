package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Grades;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/* CRUD function for grades */
@Service
public class GradesService {

    @Autowired
    private DSLContext dsl;

    /* add grade */
    public void insertGrade(Grades grade) {
        dsl.insertInto(Tables.GRADES,
                Tables.GRADES.SESSION_ID,
                Tables.GRADES.GRADE,
                Tables.GRADES.COMMENT,
                Tables.GRADES.DATE_MODIFIED,
                Tables.GRADES.REMARKS,
                Tables.GRADES.STATUS,
                Tables.GRADES.SUBJECT_ID)
        .values(
                grade.getSessionId(),
                grade.getGrade(),
                grade.getComment(),
                grade.getDateModified(),
                grade.getRemarks(),
                grade.getStatus(),
                grade.getSubjectId())
        .execute();
    }

    /* get all grades */
    public List<Grades> getGrades() {
        return dsl.selectFrom(Tables.GRADES).fetchInto(Grades.class);
    }

    /* get grade by ID */
    public Grades getGradeById(Integer gradeId) {
        return dsl.selectFrom(Tables.GRADES)
                .where(Tables.GRADES.GRADE_ID.eq(gradeId))
                .fetchOneInto(Grades.class);
    }

    /* delete a grade by ID */
    public void deleteGradeById(Integer gradeId) {
        dsl.deleteFrom(Tables.GRADES)
                .where(Tables.GRADES.GRADE_ID.eq(gradeId))
                .execute();
    }

    /* update grade detail(s) */
    public void updateGrade(Integer gradeId, Grades grade) {
        dsl.update(Tables.GRADES)
                .set(Tables.GRADES.SESSION_ID, grade.getSessionId())
                .set(Tables.GRADES.GRADE, grade.getGrade())
                .set(Tables.GRADES.COMMENT, grade.getComment())
                .set(Tables.GRADES.DATE_MODIFIED, grade.getDateModified())
                .set(Tables.GRADES.REMARKS, grade.getRemarks())
                .set(Tables.GRADES.STATUS, grade.getStatus())
                .set(Tables.GRADES.SUBJECT_ID, grade.getSubjectId())
                .where(Tables.GRADES.GRADE_ID.eq(gradeId))
                .execute();
    }

}
