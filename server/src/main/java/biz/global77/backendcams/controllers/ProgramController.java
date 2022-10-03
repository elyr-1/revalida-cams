package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ProgramService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Program;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/program") /* API entry point */
public class ProgramController {

    @Autowired
    private ProgramService programService;

    @GetMapping
    public List<Program> getPrograms() {
        return programService.getPrograms();
    }

    @GetMapping("/{programId}")
    public Program getProgram(@PathVariable(value = "programId") Integer programId) {
        return programService.getProgramById(programId);
    }

    @PostMapping("/add")
    public String addProgram(@RequestBody Program program) {
        programService.insertProgram(program);
        return "Program added successfully.";
    }

    @DeleteMapping("/delete/{programId}")
    public String deleteProgram(@PathVariable(value = "programId") Integer programId) {
        programService.deleteProgramById(programId);
        return "Program deleted successfully.";
    }

    @PutMapping("/update/{programId}")
    public String updateProgram(@PathVariable(value = "programId") Integer programId, @RequestBody Program program) {
        programService.updateProgram(programId, program);
        return "Program details updated successfully.";
    }

}
