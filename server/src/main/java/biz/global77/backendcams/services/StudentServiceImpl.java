package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Student;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/* CRUD functions for student */
@Service
public class StudentServiceImpl implements StudentService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a student */
    @Override
    public Student insertStudent(Student student) {
        dsl.insertInto(Tables.STUDENT,
                Tables.STUDENT.STUDENT_NO,
                Tables.STUDENT.FIRSTNAME,
                Tables.STUDENT.MIDDLENAME,
                Tables.STUDENT.LASTNAME,
                Tables.STUDENT.BIRTHDATE,
                Tables.STUDENT.GENDER,
                Tables.STUDENT.ADDRESS,
                Tables.STUDENT.YEARLEVEL,
                Tables.STUDENT.SEM,
                Tables.STUDENT.ACADEMIC_YEAR,
                Tables.STUDENT.STATUS,
                Tables.STUDENT.IS_ACTIVE,
                Tables.STUDENT.PROGRAM_CODE,
                Tables.STUDENT.ID)
        .values(
                student.getStudentNo(),
                student.getFirstname(),
                student.getMiddlename(),
                student.getLastname(),
                student.getBirthdate(),
                student.getGender(),
                student.getAddress(),
                student.getYearlevel(),
                student.getSem(),
                student.getAcademicYear(),
                student.getStatus(),
                student.getIsActive(),
                student.getProgramCode(),
                student.getId())
        .execute();
        return student;
    }

    /* get all students */
    @Override
    public List<Student> getStudents() {
        return dsl.selectFrom(Tables.STUDENT)
                .orderBy(Tables.STUDENT.LASTNAME)
                .fetchInto(Student.class);
    }

    /* get a student by ID */
    @Override
    public Student getStudentById(Integer studentId) {
        return dsl.selectFrom(Tables.STUDENT)
                .where(Tables.STUDENT.STUDENT_ID.eq(studentId))
                .fetchOneInto(Student.class);
    }

    /* update student details */
    @Override
    public Student updateStudent(Integer studentId, Student student) {
        dsl.update(Tables.STUDENT)
                .set(Tables.STUDENT.STUDENT_NO, student.getStudentNo())
                .set(Tables.STUDENT.FIRSTNAME, student.getFirstname())
                .set(Tables.STUDENT.MIDDLENAME, student.getMiddlename())
                .set(Tables.STUDENT.LASTNAME, student.getLastname())
                .set(Tables.STUDENT.BIRTHDATE, student.getBirthdate())
                .set(Tables.STUDENT.GENDER, student.getGender())
                .set(Tables.STUDENT.ADDRESS, student.getAddress())
                .set(Tables.STUDENT.YEARLEVEL, student.getYearlevel())
                .set(Tables.STUDENT.SEM, student.getSem())
                .set(Tables.STUDENT.ACADEMIC_YEAR, student.getAcademicYear())
                .set(Tables.STUDENT.STATUS, student.getStatus())
                .set(Tables.STUDENT.IS_ACTIVE, student.getIsActive())
                .set(Tables.STUDENT.PROGRAM_CODE, student.getProgramCode())
                .set(Tables.STUDENT.ID, student.getId())
                .where(Tables.STUDENT.STUDENT_ID.eq(studentId))
                .execute();
        return student;
    }

    /* delete a student by ID */
    @Override
    public void deleteStudentById(Integer studentId) {
        dsl.deleteFrom(Tables.STUDENT)
                .where(Tables.STUDENT.STUDENT_ID.eq(studentId))
                .execute();
    }

}
