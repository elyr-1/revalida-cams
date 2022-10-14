package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ParentServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Parent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/parent") /* API entry point */
public class ParentController {

    @Autowired
    private ParentServiceImpl parentServiceImpl;

    @GetMapping
    public ResponseEntity<List<Parent>> getParents() {
        return ResponseEntity.ok().body(parentServiceImpl.getParents());
    }

    @GetMapping("/{parentId}")
    public ResponseEntity<Parent> getParent(@RequestBody @PathVariable(value = "parentId") Integer parentId) {
        return ResponseEntity.ok().body(parentServiceImpl.getParentById(parentId));
    }

    @PostMapping
    public ResponseEntity<Parent> addParent(@RequestBody Parent parent) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/admin").toUriString());
        return ResponseEntity.created(uri).body(parentServiceImpl.insertParent(parent));
    }

    @PutMapping("/{parentId}")
    public ResponseEntity<Parent> updateParent(@PathVariable(value = "parentId") Integer parentId, @RequestBody Parent parent) {
        return ResponseEntity.ok().body(parentServiceImpl.updateParent(parentId, parent));
    }

    @DeleteMapping("/{parentId}")
    public ResponseEntity<Void> deleteParent(@PathVariable(value = "parentId") Integer parentId) {
        parentServiceImpl.deleteParentById(parentId);
        return ResponseEntity.noContent().build();
    }

}
