package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ProfessorLoadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/professor-load") /* API entry point */
public class ProfessorLoadController {

    @Autowired
    private ProfessorLoadService professorLoadService;
}
