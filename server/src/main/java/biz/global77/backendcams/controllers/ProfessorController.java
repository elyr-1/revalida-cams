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

    @GetMapping("/{professorId}")
    public Professor getProfessor(@PathVariable(value = "professorId") Integer professorId) {
        return professorService.getProfessorById(professorId);
    }

    @PostMapping("/add")
    public String addProfessor(@RequestBody Professor professor) {
        professorService.insertProfessor(professor);
        return "Professor added successfully.";
    }

    @DeleteMapping("/delete/{professorId}")
    public String deleteProfessor(@PathVariable(value = "professorId") Integer professorId) {
        professorService.deleteProfessorById(professorId);
        return "Professor deleted successfully.";
    }

    @PutMapping("/update/{professorId}")
    public String updateProfessor(@PathVariable(value = "professorId") Integer professorId, @RequestBody Professor professor) {
        professorService.updateProfessor(professorId, professor);
        return "Professor details updated successfully.";
    }

}
