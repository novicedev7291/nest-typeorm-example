use projects;

create table project(
    id int auto_increment primary key,
    name varchar(500) not null,
    created_at datetime not null,
    created_by varchar(100) not null,
    updated_at datetime not null,
    updated_by varchar(100) not null,
    version int not null
);

create table task (
    id int auto_increment primary key,
    project_id int not null,
    title varchar(200) not null,
    description varchar(1000),
    created_at datetime not null,
    created_by varchar(100) not null,
    updated_at datetime not null,
    updated_by varchar(100) not null,
    version int not null
);

insert into project(name, created_at, created_by, updated_at, updated_by, version)
values("Dummy project 1", now(), "system", now(), "system", 1);

insert into task(project_id, title, description, created_at, created_by, updated_at, updated_by, version)
values(1, "Some title 1", "Some description 1", now(), "system", now(), "system", 1);

insert into task(project_id, title, description, created_at, created_by, updated_at, updated_by, version)
values(1, "Some title 2", "Some description 2", now(), "system", now(), "system", 1);
