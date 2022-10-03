package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.SubjectDetailService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.SubjectDetailHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/subject-detail-history") /* API entry point */
public class SubjectDetailController {

    @Autowired
    private SubjectDetailService subjectDetailService;

    @GetMapping
    public List<SubjectDetailHistory> getSubjectDetails() {
        return subjectDetailService.getSubjectDetails();
    }

    @GetMapping("/{sessionId}")
    public SubjectDetailHistory getSubjectDetail(@PathVariable(value = "sessionId") Integer sessionId) {
        return subjectDetailService.getSubjectDetailById(sessionId);
    }

    @PostMapping("/add")
    public String addSubjectDetail(@RequestBody SubjectDetailHistory subjectDetail) {
        subjectDetailService.insertSubjectDetail(subjectDetail);
        return "Subject detail added successfully.";
    }

    @DeleteMapping("/delete/{sessionId}")
    public String deleteSubjectDetail(@PathVariable(value = "sessionId") Integer sessionId) {
        subjectDetailService.deleteSubjectDetailById(sessionId);
        return "Subject detail deleted successfully";
    }

    @PutMapping("/update/{sessionId}")
    public String updateSubjectDetail(@PathVariable(value = "sessionId") Integer sessionId, @RequestBody SubjectDetailHistory subjectDetail) {
        subjectDetailService.updateSubjectDetail(sessionId, subjectDetail);
        return "Subject detail updated successfully.";
    }

}
