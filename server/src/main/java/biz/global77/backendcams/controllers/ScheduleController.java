package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.ScheduleServiceImpl;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Schedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/schedule") /* API entry point */
public class ScheduleController {

    @Autowired
    private ScheduleServiceImpl scheduleService;

    @GetMapping
    public ResponseEntity<List<Schedule>> getSchedules() {
        return ResponseEntity.ok().body(scheduleService.getSchedules());
    }

    @GetMapping("/{scheduleId}")
    public ResponseEntity<Schedule> getSchedule(@PathVariable(value = "scheduleId") Integer scheduleId) {
        return ResponseEntity.ok().body(scheduleService.getScheduleById(scheduleId));
    }

    @PostMapping
    public ResponseEntity<Schedule> addSchedule(@RequestBody Schedule schedule) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/schedule").toUriString());
        return ResponseEntity.created(uri).body(scheduleService.insertSchedule(schedule));
    }

    @DeleteMapping("/{scheduleId}")
    public ResponseEntity<Void> deleteSchedule(@PathVariable(value = "scheduleId") Integer scheduleId) {
        scheduleService.deleteScheduleById(scheduleId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{scheduleId}")
    public ResponseEntity<Schedule> updateSchedule(@PathVariable(value = "scheduleId") Integer scheduleId, @RequestBody Schedule schedule) {
        return ResponseEntity.ok().body(scheduleService.updateSchedule(scheduleId, schedule));
    }

}
