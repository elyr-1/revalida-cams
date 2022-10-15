package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ProfessorLoadServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.ProfessorLoad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/professor-load") /* API entry point */
public class ProfessorLoadController {

    @Autowired
    private ProfessorLoadServiceImpl professorLoadServiceImpl;

    @GetMapping
    public ResponseEntity<List<ProfessorLoad>> getProfessorLoads() {
        return ResponseEntity.ok().body(professorLoadServiceImpl.getProfessorLoads());
    }

    @GetMapping("/{loadId}")
    public ResponseEntity<ProfessorLoad> getProfessorLoad(@PathVariable(value = "loadId") Integer loadId) {
        return ResponseEntity.ok().body(professorLoadServiceImpl.getProfessorLoadById(loadId));
    }

    @PostMapping
    public ResponseEntity<ProfessorLoad> addProfessorLoad(@RequestBody ProfessorLoad professorLoad) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/professor-load").toUriString());
        return ResponseEntity.created(uri).body(professorLoadServiceImpl.insertProfessorLoad(professorLoad));
    }

    @DeleteMapping("/{loadId}")
    public ResponseEntity<Void> deleteProfessorLoad(@PathVariable(value = "loadId") Integer loadId) {
        professorLoadServiceImpl.deleteProfessorLoadById(loadId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{loadId}")
    public ResponseEntity<ProfessorLoad> updateProfessorLoad(@PathVariable(value = "loadId") Integer loadId, @RequestBody ProfessorLoad professorLoad) {
        return ResponseEntity.ok().body(professorLoadServiceImpl.updateProfessorLoad(loadId, professorLoad));
    }

}
