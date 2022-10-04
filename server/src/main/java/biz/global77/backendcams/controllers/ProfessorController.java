package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ProfessorService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/professor") /* API entry point */
public class ProfessorController {

    @Autowired
    private ProfessorService professorService;

    @GetMapping
    public ResponseEntity<List<Professor>> getProfessors() {
        return ResponseEntity.ok().body(professorService.getProfessors());
    }

    @GetMapping("/{professorId}")
    public ResponseEntity<Professor> getProfessor(@PathVariable(value = "professorId") Integer professorId) {
        return ResponseEntity.ok().body(professorService.getProfessorById(professorId));
    }

    @PostMapping("/add")
    public ResponseEntity<Professor> addProfessor(@RequestBody Professor professor) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/professor/add").toUriString());
        return ResponseEntity.created(uri).body(professorService.insertProfessor(professor));
    }

    @DeleteMapping("/delete/{professorId}")
    public ResponseEntity<Void> deleteProfessor(@PathVariable(value = "professorId") Integer professorId) {
        professorService.deleteProfessorById(professorId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update/{professorId}")
    public ResponseEntity<Professor> updateProfessor(@PathVariable(value = "professorId") Integer professorId, @RequestBody Professor professor) {
        return ResponseEntity.ok().body(professorService.updateProfessor(professorId, professor));
    }

}
