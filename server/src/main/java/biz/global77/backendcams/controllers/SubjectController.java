package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/subject")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;
}
