package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Student;
import java.util.List;

public interface StudentService {

    List<Student> getStudents();
    Student getStudentById(Integer studentId);
    Student insertStudent(Student student);
    Student updateStudent(Integer studentId, Student student);
    void deleteStudentById(Integer studentId);

}
