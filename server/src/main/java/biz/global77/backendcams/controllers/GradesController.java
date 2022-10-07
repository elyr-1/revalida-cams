package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.GradesServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Grades;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/grades") /* API entry point */
public class GradesController {

    @Autowired
    private GradesServiceImpl gradesServiceImpl;

    @GetMapping
    public ResponseEntity<List<Grades>> getGrades() {
        return ResponseEntity.ok().body(gradesServiceImpl.getGrades());
    }

    @GetMapping("/{gradeId}")
    public ResponseEntity<Grades> getGrade(@RequestBody @PathVariable(value = "gradeId") Integer gradeId) {
        return ResponseEntity.ok().body(gradesServiceImpl.getGradeById(gradeId));
    }

    @PostMapping
    public ResponseEntity<Grades> addGrade(@RequestBody Grades grade) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/grades").toUriString());
        return ResponseEntity.created(uri).body(gradesServiceImpl.insertGrade(grade));
    }

    @DeleteMapping("/{gradeId}")
    public ResponseEntity<Void> deleteGrade(@RequestBody @PathVariable(value = "gradeId") Integer gradeId) {
        gradesServiceImpl.deleteGradeById(gradeId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{gradeId}")
    public ResponseEntity<Grades> updateGrade(@PathVariable(value = "gradeId") Integer gradeId, @RequestBody Grades grade) {
        return ResponseEntity.ok().body(gradesServiceImpl.updateGrade(gradeId, grade));
    }

}
