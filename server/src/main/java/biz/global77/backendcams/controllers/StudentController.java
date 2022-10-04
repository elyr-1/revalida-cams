package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.StudentService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/student") /* API entry point */
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public ResponseEntity<List<Student>> getStudents() {
        return ResponseEntity.ok().body(studentService.getStudents());
    }

    @GetMapping("/{studentId}")
    public ResponseEntity<Student> getStudent(@PathVariable(value = "studentId") Integer studentId) {
        return ResponseEntity.ok().body(studentService.getStudentById(studentId));
    }

    @PostMapping("/add")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/student/add").toUriString());
        return ResponseEntity.created(uri).body(studentService.insertStudent(student));
    }

    @DeleteMapping("/delete/{studentId}")
    public ResponseEntity<Void> deleteStudent(@PathVariable(value = "studentId") Integer studentId) {
        studentService.deleteStudentById(studentId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update/{studentId}")
    public ResponseEntity<Student> updateStudent(@PathVariable(value = "studentId") Integer studentId, @RequestBody Student student) {
        return ResponseEntity.ok().body(studentService.updateStudent(studentId, student));
    }

}
