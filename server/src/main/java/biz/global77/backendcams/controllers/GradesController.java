package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.GradesService;
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
    private GradesService gradesService;

    @GetMapping
    public ResponseEntity<List<Grades>> getGrades() {
        return ResponseEntity.ok().body(gradesService.getGrades());
    }

    @GetMapping("/{gradeId}")
    public ResponseEntity<Grades> getGrade(@RequestBody @PathVariable(value = "gradeId") Integer gradeId) {
        return ResponseEntity.ok().body(gradesService.getGradeById(gradeId));
    }

    @PostMapping("/add")
    public ResponseEntity<Grades> addGrade(@RequestBody Grades grade) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/grades/add").toUriString());
        return ResponseEntity.created(uri).body(gradesService.insertGrade(grade));
    }

    @DeleteMapping("/delete/{gradeId}")
    public ResponseEntity<Void> deleteGrade(@RequestBody @PathVariable(value = "gradeId") Integer gradeId) {
        gradesService.deleteGradeById(gradeId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("update/{gradeId}")
    public ResponseEntity<Grades> updateGrade(@PathVariable(value = "gradeId") Integer gradeId, @RequestBody Grades grade) {
        return ResponseEntity.ok().body(gradesService.updateGrade(gradeId, grade));
    }

}
