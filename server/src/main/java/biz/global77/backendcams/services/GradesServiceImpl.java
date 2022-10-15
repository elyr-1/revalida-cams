package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Grades;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/* CRUD function for grades */
@Service
public class GradesServiceImpl implements GradesService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add grade */
    @Override
    public Grades insertGrade(Grades grade) {
        dsl.insertInto(Tables.GRADES,
                Tables.GRADES.GRADE,
                Tables.GRADES.DATE_MODIFIED,
                Tables.GRADES.REMARKS,
                Tables.GRADES.STATUS,
                Tables.GRADES.SUBJECT_CODE)
        .values(
                grade.getGrade(),
                grade.getDateModified(),
                grade.getRemarks(),
                grade.getStatus(),
                grade.getSubjectCode())
        .execute();
        return grade;
    }

    /* get all grades */
    @Override
    public List<Grades> getGrades() {
        return dsl.selectFrom(Tables.GRADES)
                .orderBy(Tables.GRADES.SUBJECT_CODE)
                .fetchInto(Grades.class);
    }

    /* get grade by ID */
    @Override
    public Grades getGradeById(Integer gradeId) {
        return dsl.selectFrom(Tables.GRADES)
                .where(Tables.GRADES.GRADE_ID.eq(gradeId))
                .fetchOneInto(Grades.class);
    }

    /* update grade detail(s) */
    @Override
    public Grades updateGrade(Integer gradeId, Grades grade) {
        dsl.update(Tables.GRADES)
                .set(Tables.GRADES.GRADE, grade.getGrade())
                .set(Tables.GRADES.DATE_MODIFIED, grade.getDateModified())
                .set(Tables.GRADES.REMARKS, grade.getRemarks())
                .set(Tables.GRADES.STATUS, grade.getStatus())
                .set(Tables.GRADES.SUBJECT_CODE, grade.getSubjectCode())
                .where(Tables.GRADES.GRADE_ID.eq(gradeId))
                .execute();
        return grade;
    }

    /* delete a grade by ID */
    @Override
    public void deleteGradeById(Integer gradeId) {
        dsl.deleteFrom(Tables.GRADES)
                .where(Tables.GRADES.GRADE_ID.eq(gradeId))
                .execute();
    }

}
