/// --- Set up a system ---

class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      transform.rotate(Vector3.Up(), dt * 10)
    }
  }
}

// Add a new instance of the system to the engine
engine.addSystem(new RotatorSystem())

/// --- Spawner function ---

function spawnCube(x: number, y: number, z: number) {
  // create the entity
  const cube = new Entity()

  // add a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // add a shape to the entity
  cube.addComponent(new BoxShape())

  // add the entity to the engine
  engine.addEntity(cube)

  return cube
}

/// --- Spawn a cube ---

const cube = spawnCube(10, 10, 0)
const cube1 = spawnCube(5, 0, 0)
const cube2 = spawnCube(15, 10, 2)


cube.addComponent(
  new OnClick(() => {
    cube.getComponent(Transform).scale.z *= 1.1
    cube.getComponent(Transform).scale.x *= 0.9

    spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
  })
)




/// --- Spawner function for walls---

function spawnWall(x: number, y: number, z: number) {
  // create the entity
  const wall = new Entity()

  // add a transform to the entity
  wall.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // add a shape to the entity
  wall.addComponent(new BoxShape())

  // add the entity to the engine
  engine.addEntity(wall)

  return wall
}


const wall = spawnWall(10,1, 0)

wall.addComponent(
  new OnClick(() => {
    wall.getComponent(Transform).scale.z *= 1.0
    wall.getComponent(Transform).scale.x *= 1.0

    //spawnWall(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
  })
)