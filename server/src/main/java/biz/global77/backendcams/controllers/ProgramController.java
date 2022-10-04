package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ProgramService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Program;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/program") /* API entry point */
public class ProgramController {

    @Autowired
    private ProgramService programService;

    @GetMapping
    public ResponseEntity<List<Program>> getPrograms() {
        return ResponseEntity.ok().body(programService.getPrograms());
    }

    @GetMapping("/{programId}")
    public ResponseEntity<Program> getProgram(@PathVariable(value = "programId") Integer programId) {
        return ResponseEntity.ok().body(programService.getProgramById(programId));
    }

    @PostMapping("/add")
    public ResponseEntity<Program> addProgram(@RequestBody Program program) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/program/add").toUriString());
        return ResponseEntity.created(uri).body(programService.insertProgram(program));
    }

    @DeleteMapping("/delete/{programId}")
    public ResponseEntity<Void> deleteProgram(@PathVariable(value = "programId") Integer programId) {
        programService.deleteProgramById(programId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update/{programId}")
    public ResponseEntity<Program> updateProgram(@PathVariable(value = "programId") Integer programId, @RequestBody Program program) {
        return ResponseEntity.ok().body(programService.updateProgram(programId, program));
    }

}
