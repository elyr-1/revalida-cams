package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Grades;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

/* CRUD function for grades */
@Service
public class GradesServiceImpl implements GradesService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add grade */
    @Override
    public Grades insertGrade(Grades grade) {
        dsl.insertInto(GRADES,
                GRADES.GRADE,
                GRADES.DATE_MODIFIED,
                GRADES.REMARKS,
                GRADES.STATUS,
                GRADES.SUBJECT_CODE)
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
        return dsl.selectFrom(GRADES)
                .orderBy(GRADES.SUBJECT_CODE)
                .fetchInto(Grades.class);
    }

    /* get grade by ID */
    @Override
    public Grades getGradeById(Integer gradeId) {
        return dsl.selectFrom(GRADES)
                .where(GRADES.GRADE_ID.eq(gradeId))
                .fetchOneInto(Grades.class);
    }

    /* update grade detail(s) */
    @Override
    public Grades updateGrade(Integer gradeId, Grades grade) {
        dsl.update(GRADES)
                .set(GRADES.GRADE, grade.getGrade())
                .set(GRADES.DATE_MODIFIED, grade.getDateModified())
                .set(GRADES.REMARKS, grade.getRemarks())
                .set(GRADES.STATUS, grade.getStatus())
                .set(GRADES.SUBJECT_CODE, grade.getSubjectCode())
                .where(GRADES.GRADE_ID.eq(gradeId))
                .execute();
        return grade;
    }

    /* delete a grade by ID */
    @Override
    public void deleteGradeById(Integer gradeId) {
        dsl.deleteFrom(GRADES)
                .where(GRADES.GRADE_ID.eq(gradeId))
                .execute();
    }

}
