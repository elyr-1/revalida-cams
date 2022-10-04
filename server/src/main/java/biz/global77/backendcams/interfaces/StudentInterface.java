package biz.global77.backendcams.interfaces;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Student;
import java.util.List;

public interface StudentInterface {

    List<Student> getStudents();
    Student getStudentById(Integer studentId);
    Student insertStudent(Student student);
    Student updateStudent(Integer studentId, Student student);
    void deleteStudentById(Integer studentId);

}
