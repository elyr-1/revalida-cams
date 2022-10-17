package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.SubjectDetailServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.SubjectDetailHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/subject-detail-history") /* API entry point */
public class SubjectDetailController {

    @Autowired
    private SubjectDetailServiceImpl subjectDetailServiceImpl;

    @GetMapping
    public ResponseEntity<List<SubjectDetailHistory>> getSubjectDetails() {
        return ResponseEntity.ok().body(subjectDetailServiceImpl.getSubjectDetails());
    }

    @GetMapping("/{sessionId}")
    public ResponseEntity<SubjectDetailHistory> getSubjectDetail(@PathVariable(value = "sessionId") Integer sessionId) {
        return ResponseEntity.ok().body(subjectDetailServiceImpl.getSubjectDetailById(sessionId));
    }

    @PostMapping
    public ResponseEntity<SubjectDetailHistory> addSubjectDetail(@RequestBody SubjectDetailHistory subjectDetail) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/subject-detail-history").toUriString());
        return ResponseEntity.created(uri).body(subjectDetailServiceImpl.insertSubjectDetail(subjectDetail));
    }

    @DeleteMapping("/{sessionId}")
    public ResponseEntity<Void> deleteSubjectDetail(@PathVariable(value = "sessionId") Integer sessionId) {
        subjectDetailServiceImpl.deleteSubjectDetailById(sessionId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{sessionId}")
    public ResponseEntity<SubjectDetailHistory> updateSubjectDetail(@PathVariable(value = "sessionId") Integer sessionId, @RequestBody SubjectDetailHistory subjectDetail) {
        return ResponseEntity.ok().body(subjectDetailServiceImpl.updateSubjectDetail(sessionId, subjectDetail));
    }

}
