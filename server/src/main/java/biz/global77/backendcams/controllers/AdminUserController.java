package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.AdminUserServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.AdminUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/admin") /* API entry point */
public class AdminUserController {

    @Autowired
    private AdminUserServiceImpl adminUserServiceImpl;

    @GetMapping
    public ResponseEntity<List<AdminUser>> getAdminUsers() {
        return ResponseEntity.ok().body(adminUserServiceImpl.getAdminUsers());
    }

    @GetMapping("/{adminId}")
    public ResponseEntity<AdminUser> getAdminUser(@PathVariable(value = "adminId") Integer adminId) {
        return ResponseEntity.ok().body(adminUserServiceImpl.getAdminById(adminId));
    }

    @PostMapping
    public ResponseEntity<AdminUser> addAdminUser(@RequestBody AdminUser admin) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/admin").toUriString());
        return ResponseEntity.created(uri).body(adminUserServiceImpl.insertAdminUser(admin));
    }

    @DeleteMapping("/{adminId}")
    public ResponseEntity<Void> deleteAdminUser(@RequestBody @PathVariable(value = "adminId") Integer adminId) {
        adminUserServiceImpl.deleteAdminUserById(adminId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{adminId}")
    public ResponseEntity<AdminUser> updateAdminUser(@PathVariable Integer adminId, @RequestBody AdminUser admin) {
        return ResponseEntity.ok().body(adminUserServiceImpl.updateAdminUser(adminId, admin));
    }

}
