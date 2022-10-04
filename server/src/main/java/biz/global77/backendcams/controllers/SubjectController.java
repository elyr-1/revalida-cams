package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.SubjectService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/subject")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @GetMapping
    public ResponseEntity<List<Subject>> getSubjects() {
        return ResponseEntity.ok().body(subjectService.getSubjects());
    }

    @GetMapping("/{subjectId}")
    public ResponseEntity<Subject> getSubject(@PathVariable(value = "subjectId") Integer subjectId) {
        return ResponseEntity.ok().body(subjectService.getSubjectById(subjectId));
    }

    @PostMapping("/add")
    public ResponseEntity<Subject> addSubject(Subject subject) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/subject/add").toUriString());
        return ResponseEntity.created(uri).body(subjectService.insertSubject(subject));
    }

    @DeleteMapping("/delete/{subjectId}")
    public ResponseEntity<Void> deleteSubject(@PathVariable(value = "subjectId") Integer subjectId) {
        subjectService.deleteSubjectById(subjectId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/update/{subjectId}")
    public ResponseEntity<Subject> updateSubject(@PathVariable(value = "subjectId") Integer subjectId, @RequestBody Subject subject) {
        return ResponseEntity.ok().body(subjectService.updateSubject(subjectId, subject));
    }

}
