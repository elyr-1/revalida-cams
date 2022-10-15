package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ProgramServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Program;
import org.jooq.Record;
import org.jooq.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/program") /* API entry point */
public class ProgramController {

    @Autowired
    private ProgramServiceImpl programServiceImpl;

    @GetMapping
    public ResponseEntity<List<Program>> getPrograms() {
        return ResponseEntity.ok().body(programServiceImpl.getPrograms());
    }

    @GetMapping("/{programId}")
    public ResponseEntity<Program> getProgram(@PathVariable(value = "programId") Integer programId) {
        return ResponseEntity.ok().body(programServiceImpl.getProgramById(programId));
    }

//    @GetMapping("/top-programs")
//    public ResponseEntity<Result<?>> getProgramsWithStudentCount() {
//        return ResponseEntity.ok().body(programServiceImpl.getProgramsWithStudentCount());
//    }

    @PostMapping
    public ResponseEntity<Program> addProgram(@RequestBody Program program) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/program").toUriString());
        return ResponseEntity.created(uri).body(programServiceImpl.insertProgram(program));
    }

    @DeleteMapping("/{programId}")
    public ResponseEntity<Void> deleteProgram(@PathVariable(value = "programId") Integer programId) {
        programServiceImpl.deleteProgramById(programId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{programId}")
    public ResponseEntity<Program> updateProgram(@PathVariable(value = "programId") Integer programId, @RequestBody Program program) {
        return ResponseEntity.ok().body(programServiceImpl.updateProgram(programId, program));
    }

}
