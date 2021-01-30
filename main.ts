namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (character.vy == 0) {
        character.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . f f f . . f f f . . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . . . f 1 f f 1 f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 5 f 5 5 f 5 5 f . . . 
        . . . f f 5 f 5 5 f 5 5 f . . . 
        . . . f 5 5 f 5 5 f 5 5 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 5 f 5 5 f 5 5 f . . . 
        . . . f f 5 f 5 5 f 5 5 f . . . 
        . . . f 5 5 f 5 5 f 5 5 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f . . f f f . . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . . . f 1 f f 1 f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 5 f 5 5 f 5 5 f . . . 
        . . . f f 5 f 5 5 f 5 5 f . . . 
        . . . f 5 5 f 5 5 f 5 5 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(character.x + 80, character.y + 80)
    bee.follow(character)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    bee.destroy()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let flower: Sprite = null
let coin1: Sprite = null
let character: Sprite = null
info.setLife(2)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
character = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(character, 100, 0)
scene.cameraFollowSprite(character)
character.ay = 200
for (let value of tiles.getTilesByType(assets.tile`tile12`)) {
    coin1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 4 4 4 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 4 4 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    coin1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 4 4 4 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 4 4 4 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 4 4 4 4 4 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . . f 5 4 4 4 5 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 4 4 4 5 f . . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . . f 5 4 4 5 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 4 4 4 5 f . . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . . f 5 4 4 5 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 4 4 4 4 4 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . . f 5 4 4 4 5 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 4 4 4 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 4 4 4 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin1, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`tile13`)) {
    flower = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 . . 3 . . . . . . . . 
        . . . . a 4 4 a . . . . . . . . 
        . . . . 3 a a a . . . 7 . . . . 
        . . . . . . 7 . . . 7 7 . . . . 
        . . . . . . 7 7 . 7 7 7 . . . . 
        . . 6 7 7 . 7 7 7 7 6 . . . . . 
        . . . 6 7 7 7 7 7 6 . . . . . . 
        . . . . 8 7 7 7 8 6 . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        `, SpriteKind.flower)
    tiles.placeOnTile(flower, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
