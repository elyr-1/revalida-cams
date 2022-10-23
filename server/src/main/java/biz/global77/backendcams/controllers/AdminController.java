package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.AdminServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/admin") /* API entry point */
public class AdminController {

    @Autowired
    private AdminServiceImpl adminService;

    @GetMapping
    public ResponseEntity<List<Admin>> getAdminUsers() {
        return ResponseEntity.ok().body(adminService.getAdminUsers());
    }

    @GetMapping("/{adminId}")
    public ResponseEntity<Admin> getAdminUser(@PathVariable(value = "adminId") Integer adminId) {
        return ResponseEntity.ok().body(adminService.getAdminById(adminId));
    }

    @PostMapping
    public ResponseEntity<Admin> addAdminUser(@RequestBody Admin admin) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/admin").toUriString());
        return ResponseEntity.created(uri).body(adminService.insertAdmin(admin));
    }

    @DeleteMapping("/{adminId}")
    public ResponseEntity<Void> deleteAdminUser(@RequestBody @PathVariable(value = "adminId") Integer adminId) {
        adminService.deleteAdminById(adminId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{adminId}")
    public ResponseEntity<Admin> updateAdminUser(@PathVariable(value = "adminId") Integer adminId, @RequestBody Admin admin) {
        return ResponseEntity.ok().body(adminService.updateAdmin(adminId, admin));
    }

}
