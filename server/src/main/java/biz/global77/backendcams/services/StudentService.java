package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Student;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/* CRUD functions for student */
@Service
public class StudentService {

    @Autowired
    private DSLContext dsl;

    /* add a student */
    public void insertStudent(Student student) {
        dsl.insertInto(Tables.STUDENT,
                Tables.STUDENT.STUDENT_NO,
                Tables.STUDENT.PASSWORD,
                Tables.STUDENT.FIRSTNAME,
                Tables.STUDENT.MIDDLENAME,
                Tables.STUDENT.LASTNAME,
                Tables.STUDENT.PROGRAM,
                Tables.STUDENT.BIRTHDATE,
                Tables.STUDENT.GENDER,
                Tables.STUDENT.SEM,
                Tables.STUDENT.YEARLEVEL,
                Tables.STUDENT.ACADEMIC_YEAR,
                Tables.STUDENT.STATUS,
                Tables.STUDENT.ACTIVE_INACTIVE)
        .values(
                student.getStudentNo(),
                student.getPassword(),
                student.getFirstname(),
                student.getMiddlename(),
                student.getLastname(),
                student.getProgram(),
                student.getBirthdate(),
                student.getGender(),
                student.getSem(),
                student.getYearlevel(),
                student.getAcademicYear(),
                student.getStatus(),
                student.getActiveInactive())
        .execute();
    }

    /* get all students */
    public List<Student> getStudents() {
        return dsl.selectFrom(Tables.STUDENT).fetchInto(Student.class);
    }

    /* get a student by ID */
    public Student getStudentById(Integer studentId) {
        return dsl.selectFrom(Tables.STUDENT)
                .where(Tables.STUDENT.STUDENT_ID.eq(studentId))
                .fetchOneInto(Student.class);
    }

    /* delete a student by ID */
    public void deleteStudentById(Integer studentId) {
        dsl.deleteFrom(Tables.STUDENT)
                .where(Tables.STUDENT.STUDENT_ID.eq(studentId))
                .execute();
    }

    /* update student details */
    public void updateStudent(Integer studentId, Student student) {
        dsl.update(Tables.STUDENT)
                .set(Tables.STUDENT.STUDENT_NO, student.getStudentNo())
                .set(Tables.STUDENT.PASSWORD, student.getPassword())
                .set(Tables.STUDENT.FIRSTNAME, student.getFirstname())
                .set(Tables.STUDENT.MIDDLENAME, student.getMiddlename())
                .set(Tables.STUDENT.LASTNAME, student.getLastname())
                .set(Tables.STUDENT.PROGRAM, student.getProgram())
                .set(Tables.STUDENT.BIRTHDATE, student.getBirthdate())
                .set(Tables.STUDENT.GENDER, student.getGender())
                .set(Tables.STUDENT.SEM, student.getSem())
                .set(Tables.STUDENT.YEARLEVEL, student.getYearlevel())
                .set(Tables.STUDENT.ACADEMIC_YEAR, student.getAcademicYear())
                .set(Tables.STUDENT.STATUS, student.getStatus())
                .set(Tables.STUDENT.ACTIVE_INACTIVE, student.getActiveInactive())
                .where(Tables.STUDENT.STUDENT_ID.eq(studentId))
                .execute();
    }

}
