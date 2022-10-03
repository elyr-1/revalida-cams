package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ProfessorLoadService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.ProfessorLoad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/professor-load") /* API entry point */
public class ProfessorLoadController {

    @Autowired
    private ProfessorLoadService professorLoadService;

    @GetMapping
    public List<ProfessorLoad> getProfessorLoads() {
        return  professorLoadService.getProfessorLoads();
    }

    @GetMapping("/{loadId}")
    public ProfessorLoad getProfessorLoad(@PathVariable(value = "loadId") Integer loadId) {
        return professorLoadService.getProfessorLoadById(loadId);
    }

    @PostMapping("/add")
    public String addProfessorLoad(@RequestBody ProfessorLoad professorLoad) {
        professorLoadService.inserProfessorLoad(professorLoad);
        return "Load added successfully.";
    }

    @DeleteMapping("/delete/{loadId}")
    public String deleteProfessorLoad(@PathVariable(value = "loadId") Integer loadId) {
        professorLoadService.deleteProfessorLoadById(loadId);
        return "Load deleted successfully.";
    }

    @PutMapping("/update/{loadId}")
    public String updateProfessorLoad(@PathVariable(value = "loadId") Integer loadId, @RequestBody ProfessorLoad professorLoad) {
        professorLoadService.updateProfessorLoad(loadId, professorLoad);
        return "Load updated successfully.";
    }

}
