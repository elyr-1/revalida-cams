package biz.global77.backendcams.services;

import biz.global77.backendcams.interfaces.ProgramInterface;
import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Program;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/* CRUD functions for program */
@Service
public class ProgramService implements ProgramInterface {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a program */
    @Override
    public Program insertProgram(Program program) {
        dsl.insertInto(Tables.PROGRAM,
                Tables.PROGRAM.PROGRAM_CODE,
                Tables.PROGRAM.PROGRAM_TITLE,
                Tables.PROGRAM.MAJOR)
        .values(
                program.getProgramCode(),
                program.getProgramTitle(),
                program.getMajor())
        .execute();
        return program;
    }

    /* get all programs */
    @Override
    public List<Program> getPrograms() {
        return dsl.selectFrom(Tables.PROGRAM).fetchInto(Program.class);
    }

    /* get a program by ID */
    @Override
    public Program getProgramById(Integer programId) {
        return dsl.selectFrom(Tables.PROGRAM)
                .where(Tables.PROGRAM.PROGRAM_ID.eq(programId))
                .fetchOneInto(Program.class);
    }

    /* update program detail(s) */
    @Override
    public Program updateProgram(Integer programId, Program program) {
        dsl.update(Tables.PROGRAM)
                .set(Tables.PROGRAM.PROGRAM_CODE, program.getProgramCode())
                .set(Tables.PROGRAM.PROGRAM_TITLE, program.getProgramTitle())
                .set(Tables.PROGRAM.MAJOR, program.getMajor())
                .where(Tables.PROGRAM.PROGRAM_ID.eq(programId))
                .execute();
        return program;
    }

    /* delete a program */
    @Override
    public void deleteProgramById(Integer programId) {
        dsl.deleteFrom(Tables.PROGRAM)
                .where(Tables.PROGRAM.PROGRAM_ID.eq(programId))
                .execute();
    }

}
