package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.SubjectService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/subject")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @GetMapping
    public List<Subject> getSubjects() {
        return subjectService.getSubjects();
    }

    @GetMapping("/{subjectId}")
    public Subject getSubject(@PathVariable(value = "subjectId") Integer subjectId) {
        return subjectService.getSubjectById(subjectId);
    }

    @PostMapping("/add")
    public String addSubject(Subject subject) {
        subjectService.insertSubject(subject);
        return "Subject added successfully.";
    }

    @DeleteMapping("/delete/{subjectId}")
    public String deleteSubject(@PathVariable(value = "subjectId") Integer subjectId) {
        subjectService.deleteSubjectById(subjectId);
        return "Subject deleted successfully.";
    }

    @PostMapping("/update/{subjectId}")
    public String updateSubject(@PathVariable(value = "subjectId") Integer subjectId, @RequestBody Subject subject) {
        subjectService.updateSubject(subjectId, subject);
        return "Subject details updated successfully.";
    }

}
