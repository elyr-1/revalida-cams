package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ProfessorService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/professor") /* API entry point */
public class ProfessorController {

    @Autowired
    private ProfessorService professorService;

    @GetMapping
    public List<Professor> getProfessors() {
        return professorService.getProfessors();
    }

    @PostMapping("/add")
    public String addProfessor(@RequestBody Professor professor) {
        professorService.insertProfessor(professor);
        return "Professor added successfully.";
    }

}
