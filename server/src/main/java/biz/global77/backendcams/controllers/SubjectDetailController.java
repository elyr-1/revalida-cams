package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.SubjectDetailService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.SubjectDetailHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/subject-detail-history") /* API entry point */
public class SubjectDetailController {

    @Autowired
    private SubjectDetailService subjectDetailService;

    @GetMapping
    public ResponseEntity<List<SubjectDetailHistory>> getSubjectDetails() {
        return ResponseEntity.ok().body(subjectDetailService.getSubjectDetails());
    }

    @GetMapping("/{sessionId}")
    public ResponseEntity<SubjectDetailHistory> getSubjectDetail(@PathVariable(value = "sessionId") Integer sessionId) {
        return ResponseEntity.ok().body(subjectDetailService.getSubjectDetailById(sessionId));
    }

    @PostMapping("/add")
    public ResponseEntity<SubjectDetailHistory> addSubjectDetail(@RequestBody SubjectDetailHistory subjectDetail) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/subject-detail-history/add").toUriString());
        return ResponseEntity.created(uri).body(subjectDetailService.insertSubjectDetail(subjectDetail));
    }

    @DeleteMapping("/delete/{sessionId}")
    public ResponseEntity<Void> deleteSubjectDetail(@PathVariable(value = "sessionId") Integer sessionId) {
        subjectDetailService.deleteSubjectDetailById(sessionId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update/{sessionId}")
    public ResponseEntity<SubjectDetailHistory> updateSubjectDetail(@PathVariable(value = "sessionId") Integer sessionId, @RequestBody SubjectDetailHistory subjectDetail) {
        return ResponseEntity.ok().body(subjectDetailService.updateSubjectDetail(sessionId, subjectDetail));
    }

}
