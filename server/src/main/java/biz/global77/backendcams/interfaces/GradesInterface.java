package biz.global77.backendcams.interfaces;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Grades;
import java.util.List;

public interface GradesInterface {

    List<Grades> getGrades();
    Grades getGradeById(Integer gradeId);
    Grades insertGrade(Grades grade);
    Grades updateGrade(Integer gradeId, Grades grade);
    void deleteGradeById(Integer gradeId);

}
