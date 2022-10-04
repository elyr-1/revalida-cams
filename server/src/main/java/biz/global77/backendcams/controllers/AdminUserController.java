package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.AdminUserUserService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.AdminUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/admin") /* API entry point */
public class AdminUserController {

    @Autowired
    private AdminUserUserService adminUserService;

    @GetMapping
    public ResponseEntity<List<AdminUser>> getAdminUsers() {
        return ResponseEntity.ok().body(adminUserService.getAdminUsers());
    }

    @GetMapping("/{adminId}")
    public ResponseEntity<AdminUser> getAdminUser(@PathVariable(value = "adminId") Integer adminId) {
        return ResponseEntity.ok().body(adminUserService.getAdminById(adminId));
    }

    @PostMapping("/add")
    public ResponseEntity<AdminUser> addAdminUser(@RequestBody AdminUser admin) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/admin/add").toUriString());
        return ResponseEntity.created(uri).body(adminUserService.insertAdminUser(admin));
    }

    @DeleteMapping("/delete/{adminId}")
    public ResponseEntity<Void> deleteAdminUser(@RequestBody @PathVariable(value = "adminId") Integer adminId) {
        adminUserService.deleteAdminUserById(adminId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update/{adminId}")
    public ResponseEntity<AdminUser> updateAdminUser(@PathVariable Integer adminId, @RequestBody AdminUser admin) {
        return ResponseEntity.ok().body(adminUserService.updateAdminUser(adminId, admin));
    }

}
