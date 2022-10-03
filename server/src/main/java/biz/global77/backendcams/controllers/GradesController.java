package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.GradesService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Grades;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/grades") /* API entry point */
public class GradesController {

    @Autowired
    private GradesService gradesService;

    @GetMapping
    public List<Grades> getGrades() {
        return gradesService.getGrades();
    }

    @GetMapping("/{gradeId}")
    public Grades getGrade(@RequestBody @PathVariable(value = "gradeId") Integer gradeId) {
        return gradesService.getGradeById(gradeId);
    }

    @PostMapping("/add")
    public String addGrade(@RequestBody Grades grade) {
        gradesService.insertGrade(grade);
        return "Grade added successfully.";
    }

    @DeleteMapping("/delete/{gradeId}")
    public String deleteGrade(@RequestBody @PathVariable(value = "gradeId") Integer gradeId) {
        gradesService.deleteGradeById(gradeId);
        return "Grade deleted successfully.";
    }

    @PutMapping("update/{gradeId}")
    public String updateGrade(@PathVariable(value = "gradeId") Integer gradeId, @RequestBody Grades grade) {
        gradesService.updateGrade(gradeId, grade);
        return "Grade updated successfully.";
    }

}
