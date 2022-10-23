package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Student;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

/* CRUD functions for student */
@Service
public class StudentServiceImpl implements StudentService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a student */
    @Override
    public Student insertStudent(Student student) {
        dsl.insertInto(STUDENT,
                STUDENT.STUDENT_NO,
                STUDENT.FIRSTNAME,
                STUDENT.MIDDLENAME,
                STUDENT.LASTNAME,
                STUDENT.BIRTHDATE,
                STUDENT.GENDER,
                STUDENT.ADDRESS,
                STUDENT.YEARLEVEL,
                STUDENT.SEM,
                STUDENT.ACADEMIC_YEAR,
                STUDENT.STATUS,
                STUDENT.IS_ACTIVE,
                STUDENT.PROGRAM_ID,
                STUDENT.PROGRAM,
                STUDENT.SECTION_ID,
                STUDENT.USER_ID)
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
                student.getProgramId(),
                student.getProgram(),
                student.getSectionId(),
                student.getUserId())
        .execute();
        return student;
    }

    /* get all students */
    @Override
    public List<Student> getStudents() {
        return dsl.select(
                STUDENT.STUDENT_ID,
                STUDENT.STUDENT_NO,
                STUDENT.FIRSTNAME,
                STUDENT.MIDDLENAME,
                STUDENT.LASTNAME,
                STUDENT.BIRTHDATE,
                STUDENT.GENDER,
                STUDENT.ADDRESS,
                STUDENT.PROGRAM,
                STUDENT.YEARLEVEL,
                STUDENT.SEM,
                STUDENT.ACADEMIC_YEAR,
                STUDENT.STATUS,
                STUDENT.USER_ID,
                STUDENT.PROGRAM_ID,
                STUDENT.SECTION_ID,
                SECTION.SECTION_NO.as("section"))
                .from(STUDENT)
                .innerJoin(SECTION)
                .on(STUDENT.SECTION_ID.eq(SECTION.SECTION_ID))
                .orderBy(STUDENT.STUDENT_ID)
                .fetchInto(Student.class);
    }

    /* get a student by ID */
    @Override
    public Student getStudentById(Integer studentId) {
        return dsl.selectFrom(STUDENT)
                .where(STUDENT.STUDENT_ID.eq(studentId))
                .fetchOneInto(Student.class);
    }

    /* update student details */
    @Override
    public Student updateStudent(Integer studentId, Student student) {
        dsl.update(STUDENT)
                .set(STUDENT.STUDENT_NO, student.getStudentNo())
                .set(STUDENT.FIRSTNAME, student.getFirstname())
                .set(STUDENT.MIDDLENAME, student.getMiddlename())
                .set(STUDENT.LASTNAME, student.getLastname())
                .set(STUDENT.BIRTHDATE, student.getBirthdate())
                .set(STUDENT.GENDER, student.getGender())
                .set(STUDENT.ADDRESS, student.getAddress())
                .set(STUDENT.YEARLEVEL, student.getYearlevel())
                .set(STUDENT.SEM, student.getSem())
                .set(STUDENT.ACADEMIC_YEAR, student.getAcademicYear())
                .set(STUDENT.STATUS, student.getStatus())
                .set(STUDENT.IS_ACTIVE, student.getIsActive())
                .set(STUDENT.PROGRAM_ID, student.getProgramId())
                .set(STUDENT.PROGRAM, student.getProgram())
                .set(STUDENT.SECTION_ID, student.getSectionId())
                .set(STUDENT.USER_ID, student.getUserId())
                .where(STUDENT.STUDENT_ID.eq(studentId))
                .execute();
        return student;
    }

    /* delete a student by ID */
    @Override
    public void deleteStudentById(Integer studentId) {
        dsl.deleteFrom(STUDENT)
                .where(STUDENT.STUDENT_ID.eq(studentId))
                .execute();
    }

}
