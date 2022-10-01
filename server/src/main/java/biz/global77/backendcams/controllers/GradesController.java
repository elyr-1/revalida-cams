package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.GradesService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Grades;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/grades") /* API entry point */
public class GradesController {

    @Autowired
    private GradesService gradesService;

    @GetMapping
    public List<Grades> getGrades() {
        return gradesService.getGrades();
    }

}
