package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ProfessorLoadService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.ProfessorLoad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/professor-load") /* API entry point */
public class ProfessorLoadController {

    @Autowired
    private ProfessorLoadService professorLoadService;

    @GetMapping
    public ResponseEntity<List<ProfessorLoad>> getProfessorLoads() {
        return ResponseEntity.ok().body(professorLoadService.getProfessorLoads());
    }

    @GetMapping("/{loadId}")
    public ResponseEntity<ProfessorLoad> getProfessorLoad(@PathVariable(value = "loadId") Integer loadId) {
        return ResponseEntity.ok().body(professorLoadService.getProfessorLoadById(loadId));
    }

    @PostMapping("/add")
    public ResponseEntity<ProfessorLoad> addProfessorLoad(@RequestBody ProfessorLoad professorLoad) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/professor-load/add").toUriString());
        return ResponseEntity.created(uri).body(professorLoadService.insertProfessorLoad(professorLoad));
    }

    @DeleteMapping("/delete/{loadId}")
    public ResponseEntity<Void> deleteProfessorLoad(@PathVariable(value = "loadId") Integer loadId) {
        professorLoadService.deleteProfessorLoadById(loadId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update/{loadId}")
    public ResponseEntity<ProfessorLoad> updateProfessorLoad(@PathVariable(value = "loadId") Integer loadId, @RequestBody ProfessorLoad professorLoad) {
        return ResponseEntity.ok().body(professorLoadService.updateProfessorLoad(loadId, professorLoad));
    }

}
