
type element

external body : element = "document.body" [@@bs.val]
external appendChild : element -> element -> unit = "appendChild" [@@bs.send]
external createTextNode : string -> element = "document.createTextNode" [@@bs.val]

let () =
    appendChild body (createTextNode "hi there!")
