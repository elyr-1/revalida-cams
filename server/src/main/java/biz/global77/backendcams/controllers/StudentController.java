package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.StudentService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/student") /* API entry point */
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @GetMapping("/{studentId}")
    public Student getStudent(@PathVariable(value = "studentId") Integer studentId) {
        return studentService.getStudentById(studentId);
    }

    @PostMapping("/add")
    public String addStudent(@RequestBody Student student) {
        studentService.insertStudent(student);
        return "Student added successfully";
    }

    @DeleteMapping("/delete/{studentId}")
    public String deleteStudent(@PathVariable(value = "studentId") Integer studentId) {
        studentService.deleteStudentById(studentId);
        return "Student deleted successfully.";
    }

    @PutMapping("/update/{studentId}")
    public String updateStudent(@PathVariable(value = "studentId") Integer studentId, @RequestBody Student student) {
        studentService.updateStudent(studentId, student);
        return "Student details updated successfully.";
    }

}
