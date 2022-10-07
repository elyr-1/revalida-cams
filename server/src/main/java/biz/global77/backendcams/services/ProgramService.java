package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Program;
import java.util.List;

public interface ProgramService {

    List<Program> getPrograms();
    Program getProgramById(Integer programId);
    Program insertProgram(Program program);
    Program updateProgram(Integer programId, Program program);
    void deleteProgramById(Integer programId);

}
