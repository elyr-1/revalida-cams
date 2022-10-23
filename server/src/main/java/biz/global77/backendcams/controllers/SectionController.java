package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.SectionServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Section;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/section") /* API entry point */
public class SectionController {

    @Autowired
    private SectionServiceImpl sectionService;

    @GetMapping
    public ResponseEntity<List<Section>> getProfessorLoads() {
        return ResponseEntity.ok().body(sectionService.getSections());
    }

    @GetMapping("/{sectionId}")
    public ResponseEntity<Section> getProfessorLoad(@PathVariable(value = "sectionId") Integer sectionId) {
        return ResponseEntity.ok().body(sectionService.getSectionById(sectionId));
    }

    @PostMapping
    public ResponseEntity<Section> addProfessorLoad(@RequestBody Section section) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/section").toUriString());
        return ResponseEntity.created(uri).body(sectionService.insertSection(section));
    }

    @DeleteMapping("/{sectionId}")
    public ResponseEntity<Void> deleteSection(@PathVariable(value = "sectionId") Integer sectionId) {
        sectionService.deleteSectionById(sectionId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{sectionId}")
    public ResponseEntity<Section> updateSection(@PathVariable(value = "sectionId") Integer sectionId, @RequestBody Section section) {
        return ResponseEntity.ok().body(sectionService.updateSection(sectionId, section));
    }

}
