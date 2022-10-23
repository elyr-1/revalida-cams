package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.SubjectServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/subject")
public class SubjectController {

    @Autowired
    private SubjectServiceImpl subjectService;

    @GetMapping
    public ResponseEntity<List<Subject>> getSubjects() {
        return ResponseEntity.ok().body(subjectService.getSubjects());
    }

    @GetMapping("/{subjectId}")
    public ResponseEntity<Subject> getSubject(@PathVariable(value = "subjectId") Integer subjectId) {
        return ResponseEntity.ok().body(subjectService.getSubjectById(subjectId));
    }

    @GetMapping("/program-subjects/{programId}")
    public ResponseEntity<List<Subject>> getSubjectByProgram(@PathVariable(value = "programId") Integer programId) {
        return ResponseEntity.ok().body(subjectService.getSubjectsByProgram(programId));
    }

    @PostMapping
    public ResponseEntity<Subject> addSubject(@RequestBody Subject subject) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/subject").toUriString());
        return ResponseEntity.created(uri).body(subjectService.insertSubject(subject));
    }

    @DeleteMapping("/{subjectId}")
    public ResponseEntity<Void> deleteSubject(@PathVariable(value = "subjectId") Integer subjectId) {
        subjectService.deleteSubjectById(subjectId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{subjectId}")
    public ResponseEntity<Subject> updateSubject(@PathVariable(value = "subjectId") Integer subjectId, @RequestBody Subject subject) {
        return ResponseEntity.ok().body(subjectService.updateSubject(subjectId, subject));
    }

}
