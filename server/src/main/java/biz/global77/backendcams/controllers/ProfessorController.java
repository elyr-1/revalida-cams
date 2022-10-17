package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ProfessorServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/professor") /* API entry point */
public class ProfessorController {

    @Autowired
    private ProfessorServiceImpl professorServiceImpl;

    @GetMapping
    public ResponseEntity<List<Professor>> getProfessors() {
        return ResponseEntity.ok().body(professorServiceImpl.getProfessors());
    }

    @GetMapping("/{professorId}")
    public ResponseEntity<Professor> getProfessor(@PathVariable(value = "professorId") Integer professorId) {
        return ResponseEntity.ok().body(professorServiceImpl.getProfessorById(professorId));
    }

    @PostMapping
    public ResponseEntity<Professor> addProfessor(@RequestBody Professor professor) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/professor").toUriString());
        return ResponseEntity.created(uri).body(professorServiceImpl.insertProfessor(professor));
    }

    @DeleteMapping("/{professorId}")
    public ResponseEntity<Void> deleteProfessor(@PathVariable(value = "professorId") Integer professorId) {
        professorServiceImpl.deleteProfessorById(professorId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{professorId}")
    public ResponseEntity<Professor> updateProfessor(@PathVariable(value = "professorId") Integer professorId, @RequestBody Professor professor) {
        return ResponseEntity.ok().body(professorServiceImpl.updateProfessor(professorId, professor));
    }

}
