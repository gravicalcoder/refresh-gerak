import * as React from 'react';
import { useGLTF } from '@react-three/drei';

export default function ModelViewer() {
  const [model, setModel] = React.useState(null);

  const fetchModel = async () => {
    const response = await fetch('http://localhost:3000/proxy');
    const data = await response.arrayBuffer();
    const gltfLoader = new GLTFLoader();
    const gltf = await gltfLoader.parse(data, '');
    setModel(gltf);
  };

  React.useEffect(() => {
    fetchModel();
  }, []);

  return model ? <primitive position={[20, 2, 20]} object={model.scene} /> : null;
}


